#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <stdlib.h>

using std::vector;
using std::ifstream;
using std::string;

int* getOccurrences(vector<string> data) {
    int* occurences = (int*) calloc(data[0].length(), sizeof(int));

    for (string str : data) {
        for (int i = 0; i < data[0].length(); i++) {
            if(str.at(i) == '1') occurences[i]++;
        }
    }

    return occurences;
}


int getPowerConsumption(vector<string> data) {
    int n = data.size();
    int* occurences = getOccurrences(data);
    
    string gamma = "", epsilon = "";
    for (int i = 0; i < data[0].length(); i++) {
        gamma   += (occurences[i] >= n / 2) ? "1" : "0";
        epsilon += (occurences[i] > n / 2)  ? "0" : "1";
    }

    free(occurences);
    return stoi(gamma, 0, 2) * stoi(epsilon, 0, 2);
}


int getLifeSupportRating(vector<string> data) {
    // YET TO COMPLETE
    vector<string> oxygen, co2;
    // copy(data.begin(), data.end(), oxygen); // copies data from starting iterator to ending iterator into starting iterator of place to be copied to
    // copy(data.begin(), data.end(), co2); // note to self, learn more about interators, and templates (generics)
    int* occurences, temp;
    int n;

    for (int i = 0; i < data[0].length(); i++) {
        // iterate over each bit and then filter
        if (oxygen.size() > 1) {
            n = oxygen.size();
            occurences = getOccurrences(oxygen);
            free(occurences);
        }

        if (co2.size() > 1) {
            occurences = getOccurrences(co2);
            free(occurences);
        }
    }

    return 1;
}


int main(int argc, char** argv) {
    ifstream file ("input.txt");
    vector<string> data;
    string line;

    while (getline(file, line)) {
        data.push_back(line); 
    }


    std::cout << "Power consumption: " << getPowerConsumption(data) << std::endl;
    std::cout << "Life support rating: " << getLifeSupportRating(data) << std::endl;

}