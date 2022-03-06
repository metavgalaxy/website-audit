
    let account = '';
    function binanceChain() {
        BinanceChain.request({ method: "eth_accounts" })
            .then(respose => {
                account = respose[0];
                console.log(respose)
            })
            .catch(err => {
                consollog('code' + err.code);
            }).finally(() => {
            document.getElementById('showBinanceChain').innerText = account;
        });


    }



    function metaMask() {
        ethereum.request({ method: 'eth_requestAccounts' })
            .then(respose => {
                account = respose[0];
            })
            .catch((err) => {
                if (err.code === 4001) {
                    // EIP-1193 userRejectedRequest error
                    // If this happens, the user rejected the connection request.
                    console.log('Please connect to MetaMask.');
                } else {
                    console.error(err);
                }
            }).finally(() => {
            document.getElementById('showMetaMask').innerText = account;
        });
    }

