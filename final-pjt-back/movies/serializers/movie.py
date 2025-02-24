from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.db.models import Avg
from django.utils import timezone
from datetime import datetime, timedelta
from .review import ReviewSerializer
from ..models import Movie, Genre, Review
import requests

User = get_user_model()

class GenreSerializer(serializers.ModelSerializer):
    # class MovieSerializer(serializers.ModelSerializer):
    #     class Meta:
    #         model = Movie
    #         field = ('title', 'poster_path')
    class Meta:
        model = Genre
        fields = ('pk', 'name')


class MovieCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = ('pk', 'title', 'overview', 'runtime', 
        'release_date', 'director_name',
        'poster_key', 'video_key', 'backdrop_key')


class MovieListSerializer(serializers.ModelSerializer):
    wished_count = serializers.IntegerField()
    class Meta:
        model = Movie
        fields = ('pk', 'title', 'overview', 'runtime', 'director_name',
        'release_date', 'poster_key', 'backdrop_key', 'wished_count')


class MovieSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)
    reviews_count = serializers.IntegerField(source='reviews.count', read_only=True)
    genres = GenreSerializer(read_only=True, many=True)

    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username')
    wished_users = UserSerializer(read_only=True, many=True)
    wished_count = serializers.IntegerField(source='wished_users.count', read_only=True)
    score_avg = serializers.SerializerMethodField('score')
    credits = serializers.SerializerMethodField('credit')

    def score(self, movie):
        score_avg = Review.objects.filter(movie=movie).aggregate(Avg('score'))
        return score_avg['score__avg']

    def credit(self, movie):
        credits = {'actors': [], 'directors': []}
        BASE_URL = 'https://api.themoviedb.org/3'   # tmdb URL
        params = {
            'api_key': '0092d2cc473c39e4782f65d37de965bd',
            'language': 'ko-KR',
        }
        path = f'/movie/{movie.pk}/credits'
        data = requests.get(BASE_URL+path, params = params).json()
        cnt = 0
        # 영화 배우 5명
        for cast in data['cast']:
            if cnt == 5:
                break
            if cast['profile_path']:
                cnt += 1
                actor = {
                    'pk':cast['id'],
                    'name':cast['name'], 
                    'profile_key':cast["profile_path"], 
                    'character':cast['character']
                }
                credits['actors'].append(actor)
        # 감독 1명        
        for crew in data['crew']:
            if crew['profile_path']:
                director = {
                    'pk':crew['id'],
                    'name':crew['name'], 
                    'profile_key':crew["profile_path"]
                    }
                credits['directors'].append(director)
                break
        return credits

    class Meta:
        model = Movie
        fields = ('pk', 'title', 'score_avg', 'runtime' , 'overview', 'release_date', 
        'genres', 'wished_count', 'wished_users', 'reviews', 'reviews_count',
        'video_key', 'poster_key', 'credits', 'backdrop_key')

