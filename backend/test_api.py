import requests


#alphavantage api url:https://www.alphavantage.co/documentation/#intelligence
url = 'https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&tickers=COIN,FOREX:USD&topics=financial_markets&limit=100&apikey=S6RGOPPXOMPCSV3K'
r = requests.get(url)
data = r.json()
print(data)
#####################




#######################3





##########################