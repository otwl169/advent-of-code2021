#include <iostream>
#include <fstream>
#include <string>
#include <vector>

using std::vector;
using std::ifstream;
using std::string;

std::pair<long,long> getPosition(vector<string> commands) {
    long x = 0, y = 0, split_at = 0, distance = 0;
    string direction;
    for(string command : commands){
        split_at = command.find(" ");
        direction = command.substr(0, split_at);
        distance = stoi(command.substr(split_at)); // with one index supplied takes substr from index to end

        if (direction == "forward") x+= distance; 
        if (direction == "up") y -= distance;
        if (direction == "down") y += distance;
    }

    return std::make_pair(x, y);
}

std::pair<long,long> getPosition2(vector<string> commands) {
    long x = 0, y = 0, aim = 0, split_at = 0, distance = 0;
    string direction;
    for(string command : commands){
        split_at = command.find(" ");
        direction = command.substr(0, split_at);
        distance = stoi(command.substr(split_at)); // with one index supplied takes substr from index to end
        
        if (direction == "forward") {
            x += distance; 
            y += aim * distance;
        }
        if (direction == "up")   aim -= distance;
        if (direction == "down") aim += distance;
    }

    return std::make_pair(x, y);
}

int main(int argc, char** argv) {
    ifstream file ("input.txt");
    vector< string > data;
    string line;

    while (getline(file, line)) {
        data.push_back(line); 
    }

    std::pair<long, long> coordinates = getPosition(data);
    std::cout << "x: " << coordinates.first << ", y: " << coordinates.second << std::endl;
    std::cout << "x*y = " << coordinates.first * coordinates.second << std::endl;

    std::cout << "\nPART 2" << std::endl;

    coordinates = getPosition2(data);
    std::cout << "x: " << coordinates.first << ", y: " << coordinates.second << std::endl;
    std::cout << "x*y = " << coordinates.first * coordinates.second << std::endl;

}