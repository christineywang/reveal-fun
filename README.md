# Simple CLI App to Display Photo Based on IP

<br>

To use this app, first run:  
```bash
npm install
```

<br>

### Flags
In the command line, you will need to include two flags:
* `--ip`
* `--key`

The `ip` flag is set to the IP address for which you'd like to return a photo. The `key` flag is your Clearbit API [key](https://dashboard.clearbit.com/api).

<br>

### Run App
To run the app in the command line:

```bash
node index.js --ip="ip_address" --key="api_key"
```

<br>

### Example

If you send this for your IP address: `73.15.211.196`

Your broswer will open this image:

![San Francisco](./photo.png)

