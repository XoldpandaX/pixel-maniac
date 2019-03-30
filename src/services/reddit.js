import get from 'lodash/get';
import orderBy from 'lodash/orderBy';

const REDDIT_ENDPOINT = 'https://www.reddit.com';
const wallEndpoint = 'https://cors-anywhere.herokuapp.com/https://wall.alphacoders.com/api2.0/get.php?auth=f02ce61569be217487b9c7fafceae175&method=category&id=10';

class RedditService {
  async getDefaultSubreddits() {
    const url = `${ wallEndpoint }`;
    const response = await fetch(
      url,
      {
        method: 'GET'
      }
    );
    
    if (!response.ok) {
      throw new Error(
        `RedditService getDefaultSubreddits failed, HTTP status ${response.status}`
      )
    }
    
    const data = await response.json();
    console.info(data);
    //const children = get(data, 'data.children');
    
    
    // if (!children) {
    //   throw new Error('RedditService getDefaultSubreddits failed, children not returned')
    // }
    //
    // const sortedBySubscribers = orderBy(children, 'data.subscribers', 'desc');
    //
    // return sortedBySubscribers.map((subreddit) => ({
    //   title: get(subreddit, 'data.display_name'),
    //   description: get(subreddit, 'data.public_description'),
    //   url: get(subreddit, 'data.url')
    // }));
  }
}
const n = new RedditService();
n.getDefaultSubreddits();
export default new RedditService();
// f02ce61569be217487b9c7fafceae175
