import { createClient } from '@/supabase/server';
import AutoForm from '@/components/AutoForm';

export default async function page() {
	const supabase = createClient();

	const { data: session } = await supabase.auth.getSession();

	return <AutoForm session={session} />;
}
