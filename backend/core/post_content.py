#blog functions
import pymysql
from pydantic import BaseModel
from routers.models import BlogContent



def insert_post_to_blog(blog:BlogContent):
   host = '127.0.0.1'
   user = 'root'
   password = 'my-secret-pw'
   dbname = 'USERS'

   # Connect to the database
   connection = pymysql.connect(host=host,
                                user=user,
                                password=password,
                                database=dbname,
                                port=3456,
                                cursorclass=pymysql.cursors.DictCursor)


   try:
        with connection.cursor() as cursor:
            sql = "INSERT INTO blog_posts(id, title, content) VALUES (%s, %s, %s)"
            values = (blog.name,blog.title,blog.body)

            cursor.execute(sql, values)

        # Commit the changes to the database
        connection.commit()

        return "insert post successfully!"

   except pymysql.Error as e:
        print(f"Database error: {e}")

   finally:
        connection.close()





def show_blog_db():
   host = '127.0.0.1'
   user = 'root'
   password = 'my-secret-pw'
   dbname = 'USERS'

   # Connect to the database
   connection = pymysql.connect(host=host,
                                user=user,
                                password=password,
                                database=dbname,
                                port=3456,
                                cursorclass=pymysql.cursors.DictCursor)


   try:
        with connection.cursor() as cursor:
            # Check if the username and password match a user in the database
            sql = "SELECT * FROM blog_posts"
            cursor.execute(sql, )

            blog_content = cursor.fetchone()
            print(blog_content)

            if blog_content:
                return blog_content
            else:
                print("Invalid")
                return None

   except pymysql.Error as e:
        print(f"Database error: {e}")

   finally:
        connection.close()        