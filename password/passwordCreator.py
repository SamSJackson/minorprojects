import tkinter as tk, random


root = tk.Tk()
root.title("Password Creator")
root.geometry("500x500")


def readfile(filename):
	counter = 0
	passwordNames = []
	for line in open(filename):
		if counter % 3 == 0: 
			# Modulus 3 in order to read only the names of the passwords (this is also linked
			# to the appending writing in lines 45-48
			name = ' '.join(line.split())[:-1]
			passwordNames.append(name)
		counter += 1
	return passwordNames

def createPassword(length=10):
	password = ""
	letters = [chr(x) for x in range(97, 123)]
	numbers = [chr(x) for x in range(48,58)]
	capitalLetters =list((map(lambda x:x.upper(), letters))) # Creating list where each element of 'letters' is capital 
	symbols = ['!', '?', '£', '$', '%', '^', '*', '(', ')', '-', '+', '@', ':', ';', '#', '/']
	for _ in range(length):
		randomNum = random.randint(0,50) # Number used to decide which character/symbol will be added to password
		if randomNum < 6:
			password += random.choice(symbols)
		elif randomNum < 15:
			password += random.choice(capitalLetters)
		elif randomNum < 25:
			password += random.choice(numbers)
		else:
			password += random.choice(letters)
	return password

def savePassword():
	passwordName = textbox_save.get()
	if label_password["text"] == "Password will appear":
		label_save.configure(text="Please generate a password")
		return 0
	else:
		appendFile = open('passwordFile.txt', 'a')
		appendFile.write(passwordName + ":\n")
		appendFile.write(label_password["text"] + "\n")
		appendFile.write('\n')
	appendFile.close()


def check_input_name():
	global fileREAD
	print(fileREAD)
	passwordName = textbox_save.get()
	if passwordName == '': # Check if user input a name
		label_save.configure(text="Must give a name to save password under.")
		label_save.place(x="175", y="320")
		return 0
	elif passwordName in fileREAD: # Check if name is in file or used recently the + ':'
		label_save.configure(text="Password has been used, please use a different name.")
		label_save.place(x="140", y="320")
		return 0
	else:
		label_save.configure(text="Password saved under: " + textbox_save.get())
		savePassword()
	fileREAD.append(passwordName)
	return 0

def check_input_length():
	label_password.place(x="200", y="190")
	textboxInput = textbox_password.get()
	if textboxInput == '':
		label_password.configure(text=createPassword())
		return 0
	elif textboxInput.isnumeric(): # Make sure input is acceptable (will always be string from entry box)
		if int(textboxInput) > 5 and int(textboxInput) < 21:
			label_password.configure(text=createPassword(int(textboxInput)))
			return 0
	label_password.configure(text="Input must be a number within 6 and 20.")
	label_password.place(x="160", y="190")

# Read file

# Try-except is to create a new file
try:
	fileREAD = readfile('passwordFile.txt')
except:
	newfile  = open("passwordFile.txt", "w").close() 
	# Creates a new file, then closes file
	# Closes so that can be read and reassigned to new variable
	fileREAD = readfile('passwordFile.txt')

# PASSWORD INFORMATION
# Password Button
button_password = tk.Button(root, text="New password", command=check_input_length)
button_password.place(x="210",y="160")


# Password Label
label_password = tk.Label(root, text="Password will appear")
label_password.place(x="200", y="190")

# Password Textbox
textbox_password = tk.Entry(root)
textbox_password.place(x="195", y="135")


# SAVING INFORMATION
# Save Button
button_save = tk.Button(root, text='Save password', command=check_input_name)
button_save.place(x="210",y="290")

# Save Label
label_save = tk.Label(root, text='Status of saving password')
label_save.place(x="185", y="320")

# Save Textbox
textbox_save = tk.Entry(root)
textbox_save.place(x="195", y="265")





tk.mainloop()
