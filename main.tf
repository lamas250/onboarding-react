terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}

resource "vercel_project" "onboarding-react" {
  name      = "onboarding-react"
  framework = "create-react-app"
  git_repository = {
    type = "github"
    repo = "lamas250/onboarding-react"
  }
}