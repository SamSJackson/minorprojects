from datetime import date

class Transaction:
	def __init__(self, date, info, amount, total_balance):
		self._date = date 
		self._info = self._clean_info(info)
		self._amount = abs(amount)
		self._other_party = self._get_other_party(info)
		self._is_from_account = True if amount < 0 else False
		self._total_balance = total_balance

	@property
	def amount(self):
		return self._amount

	@property
	def is_from_account(self):
		return self._is_from_account

	@property
	def date(self):
		return self._date

	@property
	def info(self):
		return self._info

	def _clean_info(self, info):
		if info.find("CARD") != -1:
			return "CARD"
		else:
			return "OTHER"

	def _get_other_party(self, info):
		if self._info == 'CARD':
			split_info = info.split()
			if "TO" in split_info:
				to_index = split_info.index("TO")
				on_index = split_info.index("ON")
				other_party = split_info[to_index:on_index]
				return " ".join(other_party)
		else:
			return "UNKNOWN"	
	def in_or_out(self):
		return "Out" if self._is_from_account else "In"

	def return_transaction_list(self):
		return [str(self._date), self._info, self._other_party, self._amount, self._total_balance]

	def __str__(self):
		return f"{self._date} | {self._info} | {self.in_or_out()} | {self._amount}"