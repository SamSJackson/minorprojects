import csv

class Location_library:
	def __init__(self):
		self._locations_dict = {}
		with open("major_locations.csv") as csv_file:
			csv_reader = csv.reader(csv_file, delimiter=',')
			line_count = 0
			for row in csv_reader:
				name, latitude, longitude = row[0], row[1], row[2]
				if line_count == 0:
					line_count += 1
					continue
				self._locations_dict[name] = [float(latitude), float(longitude)]

	def get_all_locations(self):
		return self._locations_dict


	def get_location(self, location_name: str):
		'''
		Returns the latitude and longitude list from location_library
		Args: 
			location_name

		Returns:
			latitude and longitude as list, provided location_name exists,
			else returns None.
		'''
		return self._locations_dict.get(location_name, None)


