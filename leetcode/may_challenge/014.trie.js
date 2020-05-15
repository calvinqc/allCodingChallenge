function TrieNode(key) {
  this.key = key;
  this.children = {};
  this.end = false;
}

/**
 * Initialize your data structure here.
 */
const Trie = () => {
  this.root = new TrieNode(null);
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = (word) => {
  let currNode = this.root;
  for (let i = 0; i < word.length; i += 1) {
    const char = word[i];
    if (!currNode.children[char]) {
      currNode.children[char] = new TrieNode(char);
    }
    currNode = currNode.children[char];
    if (i === word.length - 1) currNode.end = true;
  }
};

const traverseEndOfWord = (root, word) => {
  let currNode = root;
  for (const char of word) {
    if (currNode.children[char]) currNode = currNode.children[char];
    else return null;
  }
  return currNode;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = (word) => {
  const currNode = traverseEndOfWord(this.root, word);
  return currNode !== null && currNode.end;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = (prefix) => {
  return traverseEndOfWord(this.root, prefix) !== null;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
