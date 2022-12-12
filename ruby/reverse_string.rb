def reverse_string(str)
  # type your code in here

  string = str.split('')
  index = string.length
  result = []

  

  

index.times do
    result << string[index - 1]
    index -= 1
  end

  return result.join('')

  
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution

# initialize a string variable, storing the split of the str
# initialize a index variable, storing the string length
# initialize an empty array
# a times for loop that will run value store in the index variable, 
# and will run the line where the string[index - 1] will be appended into the array
# then return the result array with a join('')