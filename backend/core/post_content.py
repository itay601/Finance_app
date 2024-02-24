# blog functions
import pymysql


def insert_post_to_blog(name, title, body):
    host = "database"
    user = "root"
    password = "root"
    dbname = "USERS"

    # Connect to the database
    connection = pymysql.connect(
        host=host,
        user=user,
        password=password,
        database=dbname,
        port=3306,
        cursorclass=pymysql.cursors.DictCursor,
    )

    try:
        with connection.cursor() as cursor:
            sql = "INSERT INTO blog_posts(name, title, content) VALUES (%s, %s, %s)"
            values = (name, title, body)

            cursor.execute(sql, values)

        # Commit the changes to the database
        connection.commit()

        return "insert post successfully!"

    except pymysql.Error as e:
        print(f"Database error: {e}")
        return None

    finally:
        connection.close()







def show_blog_db():
    host = "database"
    user = "root"
    password = "root"
    dbname = "USERS"

    # Connect to the database
    connection = pymysql.connect(
        host=host,
        user=user,
        password=password,
        database=dbname,
        port=3306,
        cursorclass=pymysql.cursors.DictCursor,
    )

    try:
        with connection.cursor() as cursor:
            # Check if the username and password match a user in the database
            sql = "SELECT * FROM blog_posts"
            cursor.execute(sql)

            blog_content = cursor.fetchall()
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


