# React GCP Demo

This is a simple React application. We are going to deploy the application in the cloud (GCP) using Github actions, workload identity and Cloud Run.

# Steps for setup workload Identity

- export PROJECT_ID="react-cloud-run-deploy"
- export SERVICE_ACCOUNT="gcp-github-actions"

Run
- `gcloud iam service-accounts create "${SERVICE_ACCOUNT}" --project "${PROJECT_ID}"`

Run

`gcloud services enable iamcredentials.googleapis.com --project "${PROJECT_ID}"`

- export POOL_NAME="tutorial-github-pool"
- export DISPLAY_NAME="GCP GITHUB POOL"

Run 

`gcloud iam workload-identity-pools create "${POOL_NAME}" --project="${PROJECT_ID}" --location="global" --display-name="${DISPLAY_NAME}"`

Run 
`gcloud iam workload-identity-pools describe "${POOL_NAME}" --project="${PROJECT_ID}" --location="global" --format="value(name)" `


**output from above command**

- export WORKLOAD_IDENTITY_POOL_ID="projects/746725945847/locations/global/workloadIdentityPools/tutorial-github-pool" # value from above

- export PROVIDER_NAME="tutorial-github-provider"
- export PROVIDER_DISPLAY_NAME="GCP GITHUB PROVIDER"

Run 

`gcloud iam workload-identity-pools providers create-oidc "${PROVIDER_NAME}" --project="${PROJECT_ID}" --location="global" --workload-identity-pool="${POOL_NAME}" --display-name="${PROVIDER_DISPLAY_NAME}" --attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.repository=assertion.repository" --issuer-uri="https://token.actions.githubusercontent.com"`

- export REPO="DDiscua/React-GCP-Deploy"

Run 
`gcloud iam service-accounts add-iam-policy-binding "${SERVICE_ACCOUNT}@${PROJECT_ID}.iam.gserviceaccount.com" --project="${PROJECT_ID}" --role="roles/iam.workloadIdentityUser" --member="principalSet://iam.googleapis.com/${WORKLOAD_IDENTITY_POOL_ID}/attribute.repository/${REPO}"`

Run 
`gcloud iam workload-identity-pools providers describe "${PROVIDER_NAME}" --project="${PROJECT_ID}" --location="global" --workload-identity-pool="${POOL_NAME}" --format="value(name)"`


**output from above command**

export WORKLOAD_IDENTITY_PROVIDER_ID="/projects/746725945847/locations/global/workloadIdentityPools/tutorial-github-pool/providers/tutorial-github-provider" # value from above
