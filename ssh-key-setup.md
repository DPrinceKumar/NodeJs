# Ssh key Setup
### ==============Steps for SSH ==============

* step:1 Go to -> https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

	*Open Git Bash.
	Paste the text below, substituting in your GitHub email address.
		$ ssh-keygen -t ed25519 -C "your_email@example.com"
									or for legacy use below
		$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

* step:2 after generating ssh key to the system

* step:3 check if key is generated or not
			ls -al ~/.ssh

* step:4 Adding your SSH key to the ssh-agent
			ssh-add ~/.ssh/(id_ed25519  --name of private key )- without bracket
	Support identification, interpretation, fliter of the HTML tags;

* step:5 Add your ssh key to github in setting

* step:6 check if connection is established
		ssh -T git@github.com

### ===========Done===============
