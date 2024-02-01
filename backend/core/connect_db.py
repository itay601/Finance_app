import pymysql.cursors

host = '127.0.0.1' # there is no place like home (127.0.0.1 == localhost)
user = 'root'
password = 'my-secret-pw'  # Replace with your password
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
        sql = "SELECT * FROM user"

        cursor.execute(sql)

        result = cursor.fetchall()
        for row in result:
            print(row)
except:
    print("something failed")

finally:
    connection.close()