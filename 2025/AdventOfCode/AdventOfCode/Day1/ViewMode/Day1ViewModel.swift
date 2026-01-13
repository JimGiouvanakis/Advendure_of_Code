//
//  Day1ViewModel.swift
//  AdventOfCode
//
//  Created by Dimitris Giouvanakis on 8/1/26.
//

import SwiftUI

@MainActor
@Observable
final class Day1ViewModel {
    
    var answerPart1: Int = 0
    var answerPart2: Int = 0
    var points: Int = 50
    
    var testData: [String] = ["L68", "L30", "R48", "L5", "R60", "L55", "L1", "L99", "R14", "L82"]
    
    private var data: [String] = []
    
    func setUp() {
        self.data = self.readData()
    }
    
    private func readData() -> [String] {
        
        if let filepath = Bundle.main.path(forResource: "Day1Data", ofType: "txt") {
            let contents = try? String(contentsOfFile: filepath, encoding: .utf8)
            guard let splitedContent = contents?.split(separator: "\n").map(String.init) else { return [] }
            //            self.calculatePart1(moves: splitedContent)
            self.calculatePart1(moves: splitedContent)
            self.calculatePart2(moves: splitedContent)
        } else {
            print("File not found")
        }
        
        
        return []
    }
    
    private func calculatePart1(moves: [String]) {
        //        for move in self.testData {
        for move in moves {
            if move.contains("L") {
                let movePoints = move.split(separator: "L").map(String.init)
                var number: Int = Int(movePoints[0]) ?? 0
                print("from points \(self.points)")
                while number > 100 {
                    number -= 100
                }
                if self.points < number {
                    number -= self.points
                    self.points = 100
                    self.points -= number
                } else {
                    self.points -= number
                }
                print("with the move \(move) we go in the points \(self.points)")
            } else {
                let movePoints = move.split(separator: "R")
                let number: Int = Int(movePoints[0]) ?? 0
                print("from points \(self.points)")
                if self.points + number >= 100 {
                    self.points += number
                    self.points -= 100
                    while self.points > 100 {
                        self.points -= 100
                    }
                } else {
                    self.points += number
                }
                print("with the move \(move) we go in the points \(self.points)")
            }
            if self.points == 0 || self.points == 100 {
                self.answerPart1 += 1
                self.points = 0
            }
        }
        print("My Answer in Part 1 -> \(self.answerPart1)")
    }
    
    private func calculatePart2(moves: [String]) {
        self.points  = 50
        self.answerPart2 = 0
        
        for move in moves {
            let direction = move.prefix(1)
            let amount = Int(move.dropFirst()) ?? 0
            
            for _ in 1...amount {
                if direction == "L" {
                    self.points -= 1
                } else {
                    self.points += 1
                }
                
                if self.points < 0 { self.points = 99 }
                if self.points > 99 { self.points = 0 }
                
                if self.points == 0 {
                    self.answerPart2 += 1
                }
            }
        }
        
        print("My Answer in Part 2 -> \(self.answerPart2)")
    }
    
}
