import glob
import json

# Set the input and output directories
input_dir = '/Users/derrickhodges/github/277_final_project/src/data'
output_dir = '/Users/derrickhodges/github/277_final_project/src/combinedData'

# Find all the JSON files in the input directory
json_files = glob.glob(f'{input_dir}/*.json')


json_list = []

# Open the output file
with open(f'{output_dir}/bbref_index.json', 'w') as outfile:
    # Loop through the JSON files
    for fname in json_files:
        with open(fname, 'r') as infile:
            # Read the data from the file
            data = json.load(infile)
            json_list.append(data)
    combined_array = []
    for array in json_list:
        combined_array.extend(array)

    json_string = json.dumps(combined_array)
    outfile.write(json_string)


# Close the output file
outfile.close()
