class Matrices: 

	# Must define size of square matrix.
	def __init__(self, n : int):
		self.size = n

		def createLists(rows : int):
			self.matrix = []
			for _ in range(rows):
				self.matrix.append([])

		createLists(self.size)


	# Inputting value of row index as 1-based for user
	def setRow(self, rowIndex : int, values : list):
		if len(values) != self.size:
			return ValueError 
		self.matrix[rowIndex-1] = values
		return 0

	def findMaxNum(self):
		maxNum = self.matrix[0][0]
		for row in self.matrix:
			for number in row:
				if number > maxNum:
					maxNum = number
		return maxNum

	def printMatrix(self):
		paddingMatrices = len(str(self.findMaxNum()))
		for row in self.matrix:
			print("[ " + " ".join(str(x).center(paddingMatrices) for x in row) + " ]")


