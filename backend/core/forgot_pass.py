#generate password chenge password in db and send emial with th password
import pymysql
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication



def generate_random_password(length=12):
    import random
    import string
    characters = string.ascii_letters + string.digits + string.punctuation
    return ''.join(random.choice(characters) for _ in range(length))



def send_email(receiver_email, subject, body):
    sender_email = 'itaymerel1212@gmail.com'  # Replace with your email address
    sender_password = 'doom adjn fdtf ddrj'  # Replace with your email password
    smtp_server = 'smtp.gmail.com'  # Replace with your SMTP server

    message = MIMEMultipart()
    message['From'] = sender_email
    message['To'] = receiver_email
    message['Subject'] = subject
    message.attach(MIMEText(body, 'plain'))

    try:
        with smtplib.SMTP_SSL(smtp_server, 465) as server:
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, receiver_email, message.as_string())
        print("Email sent successfully")
    except smtplib.SMTPException as e:
        print(f"Failed to send email: {e}")





def reset_password_and_send_email(email):
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
            # Check if the user exists
            sql_select_user = "SELECT * FROM user WHERE email=%s"
            cursor.execute(sql_select_user, (email,))
            user_data = cursor.fetchone()

            if user_data:
                # Generate a new random password
                new_password = generate_random_password()
                username= user_data['username']

                # Update the user's password in the database
                sql_update_password = "UPDATE user SET password=%s WHERE username=%s"
                cursor.execute(sql_update_password, (new_password, username))

                # Send the new password to the user's email
                receiver_email = user_data['email']
                email_subject = "Password Reset"
                email_body = f"Your new password is: {new_password}"
                send_email(receiver_email, email_subject, email_body)

                print("Password reset successfully. Check your email for the new password.")
                return 1
            else:
                print("User not found.")

    except pymysql.Error as e:
        print(f"Database error: {e}")

    finally:
        connection.close()

