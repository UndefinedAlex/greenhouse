// src/config/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://xtcopstrxzwcmjqbstza.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0Y29wc3RyeHp3Y21qcWJzdHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NzQ3MzIsImV4cCI6MjA0NDE1MDczMn0.wL1SyzD2pbzLs-ezyb2CEHZwE4RuIRSrrDahOldpVeo';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
