import settings from '../../config/settings.json';

interface Settings {
  theme: 'dark' | 'light';
  postsPerPage: number;
}

export default settings as Settings;
