import { createClient } from '@supabase/supabase-js'

// const URL = 'https://yqjnghfxlggrnxtyytuz.supabase.co/rest/v1/'
const URL = 'https://yqjnghfxlggrnxtyytuz.supabase.co'
const API_KEY = 'sb_publishable_L05uwI0OgyfxfbWjdL02Ww_u2wluzBG'

export const supabase = createClient(URL, API_KEY)