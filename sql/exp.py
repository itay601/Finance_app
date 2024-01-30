import pymysql.cursors

   # Database connection information
host = '127.0.0.1'
user = 'root'
password = 'my-secret-pw'  # Replace with your password
dbname = 'example_database'

   # Connect to the database
connection = pymysql.connect(host=host,
                                user=user,
                                password=password,
                                database=dbname,
                                cursorclass=pymysql.cursors.DictCursor)

try:
       with connection.cursor() as cursor:
           # SQL query
           sql = "SELECT * FROM users"

           # Execute query
           cursor.execute(sql)

           # Fetch all the records
           result = cursor.fetchall()
           for row in result:
               print(row)
finally:
       connection.close()