from long_lat_locations import Location_library
from munro_class import Munro
from munro_library import Munro_library

thisLibrary = Location_library()
#print(thisLibrary.get_location("Kenneth"))

munro_lib = Munro_library()

print(munro_lib.get_munro("Ben Nevis".lower()))
