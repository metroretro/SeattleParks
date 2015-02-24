# parks-in-seattle-web-service
An example JSON web service using information from the Seattle Department of Parks and Recreation and images from Wikimedia Commons 

#Data Definitions

	title: Name of the JSON file you requested. Either "Historic Parks by Year Established" or "Historic Parks by Name" 
	
	parks: The main object that contains the individual "park" objects

	#Park Attributes (these are capitalized):
				Name: string, name of the park, i.e. "Alki Beach Park",
				
				Address: string, address of the park, i.e. "1702 Alki Ave SW",
				
				Acreage: number, size of the park in acres, i.e. 135.9,
				
				Neighborhood: string, approximate neighborhood where the park is located, i.e."West Seattle",
				
				YearEst: number, year the park was established, i.e. 1902,
				
				ParkDescription: long text, about a paragraph-length snippet about the park's history, i.e.
					"Alki Beach Park is a long beach strip that runs from Alki Point to Duwamish Head on Elliott Bay. The Statue of Liberty, a small replica of the original \"Liberty Enlightening the World\" in New York City, was a gift from Reginald H. Parsons and the Seattle Council of the Boy Scouts of America in 1952. ",
				
				Image: string, name of the image for both historic and modern images. The only thing you need to change is the folder name. 
					to get the historic image:
						"images/historic/Alki Beach Park.jpg",
					to get modern image:
						"images/modern/Alki Beach Park.jpg",
				
				HstImgYear: number, approximate year the historic image was taken, i.e., 1920,
				
				HstImgCredit: string, image credit for historic image of the park, i.e. "Alki Beach, circa 1920 by Seattle Municipal Archives",
				
				ModImgCredit: string, image credit for modern pic of the park, i.e. "West Seattle Statue of Liberty 02 by Joe Mabel, Wikimedia Commons",
				
				Website: Seattle Parks & Rec website for the park, i.e. "http://www.seattle.gov/parks/park_detail.asp?ID=445",
				
				Amenities: string, can be considered comma separated list for each amenity, i.e. "Boat Launches, Public Art, Viewpoints, Waterfront"
