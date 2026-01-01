import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Trash2, Eye, EyeOff } from 'lucide-react';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface Submission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  created_at: string;
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (err) {
      console.error('Error fetching submissions:', err);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: string, currentRead: boolean) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ read: !currentRead })
        .eq('id', id);

      if (error) throw error;
      fetchSubmissions();
    } catch (err) {
      console.error('Error updating submission:', err);
    }
  };

  const deleteSubmission = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) return;

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchSubmissions();
    } catch (err) {
      console.error('Error deleting submission:', err);
    }
  };

  const filteredSubmissions =
    filter === 'unread' ? submissions.filter((s) => !s.read) : submissions;

  const unreadCount = submissions.filter((s) => !s.read).length;

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage contact form submissions</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-gray-600">Total Submissions: {submissions.length}</p>
              <p className="text-blue-600 font-semibold">Unread: {unreadCount}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('unread')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'unread'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Unread ({unreadCount})
              </button>
              <button
                onClick={fetchSubmissions}
                className="px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                Refresh
              </button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading submissions...</p>
            </div>
          ) : filteredSubmissions.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">
                {filter === 'unread' ? 'No unread submissions' : 'No submissions yet'}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredSubmissions.map((submission) => (
                <div
                  key={submission.id}
                  className={`border rounded-lg p-4 transition-colors ${
                    submission.read ? 'bg-gray-50 border-gray-200' : 'bg-blue-50 border-blue-200'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900 text-lg">{submission.name}</h3>
                        {!submission.read && (
                          <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{submission.email}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {new Date(submission.created_at).toLocaleDateString()}{' '}
                        {new Date(submission.created_at).toLocaleTimeString()}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => markAsRead(submission.id, submission.read)}
                        className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                        title={submission.read ? 'Mark as unread' : 'Mark as read'}
                      >
                        {submission.read ? (
                          <EyeOff size={18} className="text-gray-600" />
                        ) : (
                          <Eye size={18} className="text-blue-600" />
                        )}
                      </button>
                      <button
                        onClick={() => deleteSubmission(submission.id)}
                        className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                        title="Delete submission"
                      >
                        <Trash2 size={18} className="text-red-600" />
                      </button>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="font-semibold text-gray-900">{submission.subject}</p>
                    <p className="text-gray-700 mt-2 whitespace-pre-wrap">{submission.message}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
