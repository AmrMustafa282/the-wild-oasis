import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://buwzisbladzmdxlopnem.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1d3ppc2JsYWR6bWR4bG9wbmVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0MTk3MjcsImV4cCI6MjAzNTk5NTcyN30.hidW5WrwUhgWusrFsz6fk2ZvOU-MlH-nN82CUlbpQ4Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
