import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://ovaugogwfjtyeeooxxva.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxMzUyODY2NSwiZXhwIjoxOTI5MTA0NjY1fQ.2WQMV62AIrxMuJiFNsw01q_Q4SdUpK1MLtGjkkUIr3I"
);

export default supabase;
