from dotenv import dotenv_values

config = dotenv_values(".env.local")

print(config)