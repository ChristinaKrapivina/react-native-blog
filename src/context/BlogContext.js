import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        }
      ];
    case 'edit_blogpost':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};
const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch ({type: 'add_blogpost', payload: { title, content }});
    if(callback) callback();
  };
};

const editBlogPost = dispatch => {
  return (id, title, content, callback) => {
    dispatch ({type: 'edit_blogpost', payload: { id, title, content }});
    if(callback) callback();
  };
};

const deleteBlogPost = dispatch => {
  return (id) => {
    dispatch ({type: 'delete_blogpost', payload: id});
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, editBlogPost, deleteBlogPost },
  [{ id: 1, title: 'Test post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh diam, finibus ac rhoncus eget, tincidunt ac nunc. Curabitur eu tempus diam. Maecenas non tincidunt mi. Aliquam ultrices condimentum felis eu hendrerit. Donec tellus orci, semper a aliquet ut, rutrum sed mi. In hac habitasse platea dictumst. Integer quis eros sit amet sapien rutrum aliquam. Fusce ac pulvinar orci, et tincidunt arcu. Vestibulum luctus viverra turpis, sed congue felis pellentesque consequat. Integer pretium luctus libero nec commodo. Maecenas ante dolor, venenatis a tempus non, sollicitudin eget leo. Maecenas eleifend rhoncus nisl.'}]
);
