'''

Information needed:
Size of matrices
-> Matrices components

Formula to obtain determinant of A, an n x n matrices:
where aij denotes position of component (i is row, j is column)

det(A) = (sum from j=1 to n) (-1)^(i+j) a(ij)*det(A(ij))

or 

det(A) = (sum from i=1 to n) (-1)^(i+j) a(ij)*det(A(ij))

This could easily be a recursive function.

Format of lists should be:

[[x,y,z], [a,b,c], [d,e,f]]
representing
[ x y z ]
[ a b c ]
[ d e f ]


'''
import random
from matricesClass import Matrices

def createMatrix(n):
	matrix = Matrices(n)
	for x in range(n):
		rowList = [random.randint(0,20) for i in range(n)]
		matrix.setRow(x+1,rowList)
	return matrix
	print(matrix)

def findTwoDeterminant(matrices : list):
	row1, row2 = matrices[0], matrices[1]
	return (row1[0]*row2[1])-(row1[1]*row2[0])

def findDeterminant(matrices : list):
	pass 


thislist = 'dw8adad21d'
newList = []
for i in range(len(thislist)):
    print(thislist[i])
