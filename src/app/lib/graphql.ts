import { gql } from '@apollo/client';

// Services enum (matches backend enum)
export const SERVICE_OPTIONS = [
  { key: 'DELIVERY', value: 'delivery' },
  { key: 'PICKUP', value: 'pick-up' },
  { key: 'PAYMENT', value: 'payment' }
];

// Register mutation
export const REGISTER_LEAD = gql`
  mutation RegisterLead($input: RegisterInput!) {
    register(input: $input) {
      success
      id
      email
    }
  }
`;

// Get all leads query
export const GET_LEADS = gql`
  query GetLeads {
    leads {
      id
      name
      email
      mobile
      postcode
      services
    }
  }
`;

// Get lead by ID query
export const GET_LEAD = gql`
  query GetLead($id: Int!) {
    lead(id: $id) {
      id
      name
      email
      mobile
      postcode
      services
    }
  }
`;