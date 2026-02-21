import React, { useEffect, useState } from "react";

type Fact = {
    text: string;
};

function RandomFact() {
    const API_URL = "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en";
    const [fact, setFact] = useState<Fact | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchFact = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = (await res.json()) as Fact;
            setFact(data);
        } 
        catch (e: any) {
            setError(e?.message ?? "Unknown error");
        } 
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFact();
    }, []);

    return (
        <div>
            <h2>Random Fact</h2>
            {loading && <p>Loading…</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {fact && (
                <div>
                    <p style={{border: "1px solid white", padding: "4px", borderRadius: "5px", backgroundColor: "#f0f0f0", color: "#000000"}}>
                        <strong>Fact:</strong> {fact.text}
                    </p>
                </div>
            )}
            <button onClick={fetchFact} disabled={loading} style={{ marginTop: 8 }}>
                New fact
            </button>
        </div>
    );
}

export default RandomFact;