#include <cstring>
#include <string>
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
	int testcases, n, budget, maxHouses;
	int tmp;
	cin >> testcases;
	for (int i=0; i < testcases; i++) {
		cin >> n >> budget;
		vector<int> houses;
		for (int j=0; j < n; j++) {
			cin >> tmp;
			houses.push_back(tmp);
		}
		sort(houses.begin(), houses.end());
		maxHouses = 0;
		for (int house : houses) { 
			if (budget >= house) {
				maxHouses += 1;
				budget -= house;
			} else { 
				break; 
			} 
		}
		cout << "Case  #" << i+1 << ": " << maxHouses << '\n';
	}
}