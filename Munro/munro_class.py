from math import radians, cos, sin, asin, sqrt
from long_lat_locations import Location_library

class Munro:


	def __init__(self, name: str, height: int, latitude: float, longitude: float):
		self._name = name.title()
		self._height = height
		self._location = [latitude, longitude]

	@property
	def name(self):
		return self._name

	@property
	def height(self):
		return self._height

	@property
	def location(self):
		return self._location
	
	

	'''		
	def get_distance_from(self, from_location: str, distance_type="miles"):
		# Getting latitude and longitude of location, making sure available
		lat1 = self.latitude
		lon1 = self.longitude

		try:
			lat2, lon2 = self.locations.get_location(from_location)
		except:
			print("Location not available.")
		lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])

		# haversine formula 
		dlon = lon2 - lon1 
		dlat = lat2 - lat1 
		a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
		c = 2 * asin(sqrt(a)) 
		r = 3956 # Radius of earth in miles. Use 6371 for kilometres
		return c * r
	'''