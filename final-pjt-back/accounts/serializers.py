from rest_framework import serializers
from django.contrib.auth import get_user_model
from movies.models import Genre, Movie, Review



class ProfileSerializer(serializers.ModelSerializer):

    class MovieSerializer(serializers.ModelSerializer):
        
        class Meta:
            model = Movie
            fields = ('pk', 'title', 'poster_path')

    class ReviewSerializer(serializers.ModelSerializer):
        class MovieSerializer(serializers.ModelSerializer):

            class Meta:
                model = Movie
                fields = ('pk', 'title',)
        
        movie = MovieSerializer()
        like_count = serializers.IntegerField(source='like_users.count', read_only=True)

        class Meta:
            model = Review
            fields = ('pk', 'movie', 'content', 'score', 'like_count')

    wish_movie_list = MovieSerializer(many=True)
    reviews = ReviewSerializer(many=True)

    preferred_genres = serializers.SerializerMethodField('preferred')

    def preferred(self, user):
        genres = {}
        for genre in Genre.objects.all():
            genres[genre.name] = 0

        for review in Review.objects.filter(user=user):
            for movie_genre in review.movie.genres.all():
                genres[movie_genre.name] += review.score - 3

        genres = list(genres.items())
        genres.sort(key=lambda x: x[1], reverse=True)
        data = []

        for idx, genre in enumerate(genres):    # 선호 장르 최대 5개(없으면 선호도가 0이면 X)
            if idx > 5:
                break
            if genre[1] <= 0:
                break
            data.append({genre[0]: genre[1]})   # 선호도와 함께 전송

        return data
    class Meta:
        model = get_user_model()
        fields = ('pk', 'username', 'wish_movie_list', 'reviews', 'preferred_genres', 'mileage')


class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = get_user_model()
        fields = ('pk', 'username', 'is_staff')