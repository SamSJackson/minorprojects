from datetime import datetime, date

class Transaction:

	def __init__(self, date : str, transaction_type : str, description : str, amount: tuple, balance : str):
		self._date = self._clean_date(date)
		self._transaction_type = transaction_type
		self._from_account = self._is_from_account(amount)
		self._description = self._clean_description(description)
		self._amount = float(self._get_amount(amount))
		self._balance = float(balance)

	def _clean_date(self, date):
		dt = datetime.strptime(date, "%d/%m/%Y")
		return dt.date()

	def _clean_description(self, description): 
		split_description = description.split()
		if "CD" in split_description:
			cd_index = split_description.index("CD")
			split_description = split_description[0:cd_index]
		if (len(split_description)) >= 2:
			split_description = split_description[0:2]
		filtered_description = [word for word in split_description if len(word) < 10]
		return " ".join(filtered_description)

	def _get_amount(self, amount):
		return amount[0] if self._from_account else amount[1]

	def _is_from_account(self, amount):
		return True if amount[0] else False

	def __str__(self):
		direction = "Outgoing" if self._from_account else "Incoming"
		return f"Transaction: Date: {self._date}, Amount: {self._amount}, Direction: {direction}, Balance: {self._balance}"

	def __repr__(self):
		return f"Transaction {self._date}, {self._amount}"

	@property
	def date(self):
		return self._date

	@property
	def transaction_type(self):
		return self._transaction_type

	@property
	def from_account(self):
		return self._from_account
	
	@property
	def amount(self):
		return self._amount
	
	@property
	def description(self):
		return self._description

	@property
	def balance(self):
		return self._balance
	


	
