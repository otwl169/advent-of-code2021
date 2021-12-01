#include <iostream>
#include <fstream>
#include <string>
#include <vector>

using namespace std;

int sonar_sweep(vector<int> data) {
    int increasing_segments = 0;
    for (int i = 1; i < data.size(); i++) {
        if (data[i] > data[i-1]) increasing_segments++;
    }

    return increasing_segments;
}

int sonar_sweep2(vector<int> data) {
    int increasing_segments = 0;
    for (int i = 1; i < data.size()-3; i++) {
        if (data[i+2] > data[i-1]) increasing_segments++; // as the sliding window contains 2 common
        // elements we only need to compare the ends
    }

    return increasing_segments;
}

int main() {
    cout << "Merry Christmas!" << endl;

    ifstream file ("sonar-data.txt");
    vector<int> sonar_data;
    string line;
    while (file) {
        getline(file, line);
        sonar_data.push_back(stoi(line));
    }

    cout << sonar_sweep(sonar_data) << endl;
    cout << sonar_sweep2(sonar_data) << endl;
    return 0;
}