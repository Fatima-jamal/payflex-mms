# PayFlex MMS – Merchant Management System

This is the administrative portal of PayFlex where merchant onboarding is managed using a maker-checker workflow. Built using ReactJS, this system enables end-to-end review, approval, and rejection of merchant applications.

## Features

- Admin login with hardcoded credentials
- View pending merchant applications
- Approve/reject merchants with editable reasons
- View approved merchants with generated credentials
- Rework and resubmit rejected merchant requests
- Dashboard summaries for merchant statuses

## Pages

- `Login.jsx`: Admin login
- `Dashboard.jsx`: Summary view of merchants
- `MerchantRequests.jsx`: View and process merchant applications
- `ApprovedMerchants.jsx`: View and copy login credentials
- `ReturnedMerchants.jsx`: Rework interface for rejected merchants
- `AddMerchantForm.jsx`: Multi-step onboarding form

## Technology Stack

- ReactJS
- React Router DOM
- Axios
- Scoped CSS
- GitHub Actions (CI)
- Netlify (Hosting)

## Deployment

Live: [https://payflex-mms.fatima-jamal.com](https://payflex-mms.fatima-jamal.com)

## Setup Instructions

1. Clone the repo  
2. Add `.env` with correct backend API URL  
3. Run with `npm install && npm start`

## License

© 2025 Fatima Jamal – All rights reserved.
