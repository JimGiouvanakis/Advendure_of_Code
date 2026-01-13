//
//  Day1View.swift
//  AdventOfCode
//
//  Created by Dimitris Giouvanakis on 8/1/26.
//

import SwiftUI

struct Day1View: View {
    
    @State private var viewModel: Day1ViewModel = .init()
    var body: some View {
        VStack {
            Text("The Answer in Part 1 is: \(viewModel.answerPart1)")
            Text("The Answer in Part 2 is: \(viewModel.answerPart2)")
        }
        .onAppear {
            viewModel.setUp()
        }
    }
}

#Preview {
    Day1View()
}
