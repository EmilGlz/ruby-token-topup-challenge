# ruby-token-topup-challenge

This Ruby script processes user and company data from JSON files, updates token balances based on the company’s top-up value, and generates an output file summarizing the updates and email status of users.

## Features

- **Load Data**: Reads user and company data from JSON files.
- **Token Balance Calculation**: Calculates each user's new token balance by adding the company's top-up amount, and displays this new balance in the output.
- **Email Status Filtering**: Separates users who are emailed from those who are not, based on their email status.
- **Output Generation**: Writes results to an output file, showing user details (name, email, token balances), email status, and the total top-up amount for each company.

## Requirements

- Ruby 2.6 or higher
- JSON files for users and companies

## Installation

1. Clone the repository or download the script files.
2. Ensure Ruby is installed on your system.
3. Place the required files (`users.json`, `companies.json`) in the same directory as `challenge.rb`.

## Usage

To run the script, use the following command in your terminal:

```bash
ruby challenge.rb
