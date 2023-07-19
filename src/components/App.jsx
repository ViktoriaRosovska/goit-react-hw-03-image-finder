import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchForm } from './SearchForm/SearchForm';
import { Searchbar } from './Searchbar/Searchbar';
export const App = () => {
  return (
    <div>
      <Searchbar>
        <SearchForm />
      </Searchbar>
      <ImageGallery />
    </div>
  );
};
