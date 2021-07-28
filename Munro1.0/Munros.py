from math import radians, cos, sin, asin, sqrt
from munro_class import Munro
from munro_library import Munro_library
from long_lat_locations import Location_library


# Checking if user wants to leave.
def check_input(userInput: str):
	if userInput.lower() in ["quit", "exit"]:
		quit()
	return False

# Factoring out common portion.
def base_input():
	print("(I)nformation on a munro, (A)ll munros, (S)earch for a munro, (N)earby munros:", end=" ")
	baseChoice = input()	
	check_input(baseChoice)
	return baseChoice

def confirm_numeric_distance(max_distance: str):
	while max_distance.isnumeric() != True:
		print(f"{max_distance} is not numeric")
		print("Examples of numeric is '123' or '23', with no quotations")
		max_distance = input("Please put numeric range: ")
	return max_distance

def haversine_function(lat1: float, lon1: float, lat2: float, lon2: float):
	lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])

	# haversine formula 
	dlon = lon2 - lon1 
	dlat = lat2 - lat1 
	a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
	c = 2 * asin(sqrt(a)) 
	r = 3956 # Radius of earth in miles. Use 6371 for kilometres
	return c * r

# Libraries
munro_lib = Munro_library()
location_lib = Location_library()

# All munros
all_munros = munro_lib.get_all_munros()
all_munros_names = []
# Add name of munro to list 
for munro_object in all_munros:
	all_munros_names.append(munro_object.name)

print("Type 'quit' to exit")
baseChoice = base_input()

while True:
	print()
	
	# Information if-statement
	if baseChoice.upper() == "I":
		print("What is the name of the munro?:", end=" ")
		munroName = input()
		check_input(munroName)
		munroInfo = munro_lib.get_munro(munroName.lower())
		print()
		# Checking if input is valid
		if munroInfo == None:
			print(munroName + " does not exist, may have spelt wrong")
		else:
			print("Munro name: " + munroInfo.name)
			print("Munro height: " + str(munroInfo.height))
			print("Munro latitude: " + str(munroInfo.location[0]))
			print("Munro longitude: " + str(munroInfo.location[1]) + "\n")

	# All munros if-statement
	elif baseChoice.upper() == "A":
		for element in all_munros_names:
			print(element)

	# Searched munros if-statement
	elif baseChoice.upper() == "S":
		print("Type start of munro, must be correct spelling:", end=" ")
		search_input = input().strip() # Make sure that input has no spaces at ends.
		munro_found_list = [munro_found for munro_found in all_munros_names if munro_found.startswith(search_raw_input)]
		for element in munro_found_list:
			print(element)

	elif baseChoice.upper() == "N":
		# Get current location
		print("Where are you now?:", end=" ")
		location_base_input = input().lower().capitalize()
		location_input = location_lib.get_location(location_base_input)
		# Make sure that location is valid
		if location_input == None:
			print("Do not have information on that place, or spelt incorrectly\n")
			baseChoice = base_input()
			continue
		# Assign location in lat, long for haversine
		latitude_place, longitude_place = location_input
		print(f"{location_base_input}: {latitude_place}, {longitude_place}")
		
		print("How close (in miles) is your max range, input must be numeric:", end=" ")
		max_distance = confirm_numeric_distance(input())
		# Possible close munros, list made so I can print in order
		close_munros = {}
		for munro_object in all_munros:
			# Get latitude and longitude of mountain
			latitude_munro, longitude_munro = munro_object.location
			haversine_distance = haversine_function(float(latitude_place), float(longitude_place), float(latitude_munro), float(longitude_munro))
			if haversine_distance <= float(max_distance):
				close_munros[munro_object.name] = haversine_distance
		if len(close_munros) == 0:
			print("No nearby munros")
			# Send back to start of while loop
			baseChoice = base_input()
			continue
		close_munros = dict(sorted(close_munros.items(), key=lambda item: item[1]))
		print("Munro Name\t\t\t Haversine Distance")
		for nearby_munro in close_munros:
			print(f"{nearby_munro}\t\t\t{close_munros[nearby_munro]}")




	# If user gives input which is not valid
	else:
		print("Please type one of the options in the brackets")
		print()

	baseChoice = base_input()
