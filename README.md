sudo openssl genrsa -out private-key.pem 20148
openssl rsa -in private-key.pem -pubout -out public-key.pem