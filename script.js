function calc() {
            const p = parseFloat(document.getElementById('principal').value);
            const r = parseFloat(document.getElementById('rate').value);
            const t = parseFloat(document.getElementById('time').value);

            const output = document.getElementById('outputAnswer');

            if (isNaN(p) || isNaN(r) || isNaN(t)) {
                output.innerHTML = '<span class="currency">GHC</span>0.00';
                return;
            }

            const interest = (p * r * t) / 100;
            
            const formatted = interest.toLocaleString('en-US', { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 
            });

            output.classList.remove('value-change');
            void output.offsetWidth; 
            output.classList.add('value-change');
            
            output.innerHTML = `<span class="currency">GHC</span>${formatted}`;
        }