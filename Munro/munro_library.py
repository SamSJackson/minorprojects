from munro_class import Munro
import csv

class Munro_library:
	def __init__(self):
		self._munros = {}
		with open("munro_locations.csv") as csv_file:
			csv_reader = csv.reader(csv_file, delimiter=",")
			line_count = 0
			for row in csv_reader:
				if line_count == 0:
					line_count += 1
					continue
				name, height, isMunro, latitude, longitude= row[5].lower(), row[9], row[26], row[29], row[30]
				# Making sure that mountain is a Munro and not just Top (munro height but not munro titled)
				if isMunro != "MUN":
					continue
				height = round(float(height))
				self._munros[name] = Munro(str(name), height, float(latitude), float(longitude))

	def get_all_munros(self):
		return list(self._munros.values())

	def get_munro(self, munro_name: str):
		"""Returns the munro object (name, height, [lat, long]) from the munro library.

        Args:
            munro_name: string of munro name.

        Returns:
            Munro object of requested munro, returns None if Munro does not exist.
        """
		return self._munros.get(munro_name, None)

