######login
import pymysql
import jwt
from datetime import datetime, timedelta
import hashlib


SECRET_KEY = "@@##sfasfd321"  # Replace with a strong and unique secret key
TOKEN_EXPIRATION_SECONDS = 3600  # Set the expiration time for the token (e.g., 1 hour)


def validate_token(token):
    # Add your token validation logic here
    # For example, using PyJWT to decode and verify the token
    try:
        decoded_token = jwt.decode(token, "@@##sfasfd321", algorithms=["HS256"])
        return decoded_token.payload["user_id"]
    except jwt.ExpiredSignatureError:
        return None  # Token has expired
    except jwt.InvalidTokenError:
        return None  # Invalid token


def generate_token(user_id):
    payload = {
        "user_id": user_id,
        "exp": datetime.utcnow() + timedelta(seconds=TOKEN_EXPIRATION_SECONDS),
    }
    token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
    return token


def login_user_func(username, password):
    host = "127.0.0.1"
    user = "root"
    password = "my-secret-pw"
    dbname = "USERS"

    # Connect to the database
    connection = pymysql.connect(
        host=host,
        user=user,
        password=password,
        database=dbname,
        port=3456,
        cursorclass=pymysql.cursors.DictCursor,
    )

    try:
        with connection.cursor() as cursor:
            # Check if the username and password match a user in the database
            sql = "SELECT * FROM user WHERE username=%s"
            cursor.execute(sql, (username,))

            user_data = cursor.fetchone()
            print(user_data)

            if user_data:
                # If user is found, generate and return a token
                user_id = user_data["id"]
                token = generate_token(user_id)
                return token
            else:
                print("Invalid username or password")

    except pymysql.Error as e:
        print(f"Database error: {e}")

    finally:
        connection.close()
