import imaplib
from getpass import getpass

user_name = input("Please enter your user name: ")
server_addr = input("Please enter your server address: ")
password = getpass()

server = imaplib.IMAP4_SSL(host=server_addr, port=993)
server.login(user_name, password)
message_count = server.select("INBOX", readonly=True)
print(f"The Inbox contains: {message_count} messages")