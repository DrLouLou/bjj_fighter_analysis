import csv
import logging

def csv_to_json(csvFilePath):
    """
    Converts a CSV file to JSON format.
    Returns the JSON data as a dictionary.
    """
    data = []

    try:
        with open(csvFilePath, encoding='utf-8') as csvf:
            csvReader = csv.DictReader(csvf, delimiter=';')

            for rows in csvReader:
                print(f"Row: {rows}")

                data.append(rows)

    except Exception as e:
        logging.error(f"Error processing CSV file: {e}")
        raise e

    return data
